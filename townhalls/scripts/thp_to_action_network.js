#!/usr/bin/env node

'use strict';

const fs = require('fs');
const csv = require('csv');
const moment = require('moment');

const out = fs.createWriteStream('./data/action-network/thp_4-10.csv');

fs.createReadStream('./data/townhallproject/4-10.csv')
  .pipe(csv.parse({ columns: true }))
  .pipe(csv.transform(row => {
    const event_title = row['|__eventName'];
    const administrative_title = [row['|__meetingType'], 'with', row['|__Member']].join(' ');

    let date = new Date(row['|__dateString'] || row['|__yearMonthDay']);
    if (date == 'Invalid Date') date = new Date(row['|__Date']);

    // Skip events with no date, past events and events with no location
    if (date == 'Invalid Date' || (new Date() > date) || row['|__noLoc']) return;

    let address, streetAddress, city, state, zip;

    try {
      address = row['|__address'].split(',');
      streetAddress = row['|__streetAddress'] || address[0].trim();
      city = row['|__City'] || address[1].trim();
      state = row['|__StateAb'] || address[2].trim().split(' ')[0];
      zip = row['|__Zip'] || address[2].trim().split(' ')[1];
    } catch(err) {
      // Failed to parse address
      return;
    }

    const full_event = {
      'event_title': event_title || administrative_title,
      'administrative_title': event_title ? administrative_title : '',
      'location_name': row['|__Location'],
      'address': streetAddress,
      'city': city,
      'state': state,
      'zip': zip,
      'country': 'US',
      'time': row['|__timeStart24'] || moment(row['|__Time'], 'HH:mm a').format('HH:mm'),
      'date': date.toLocaleDateString('en-US'),
      'host': '',
      'sponsor': 'https://actionnetwork.org/api/v2/groups/fight-for-the-future',
      'host_contact_info': '',
      'attendee_pitch': row['|__Notes'],
      'attendee_instructions': '',
      'end_time': row['|__timeEnd24'] || moment(row['|__timeEnd'], 'HH:mm a').format('HH:mm')
    };

    return full_event;
  }))
  .pipe(csv.stringify({ header: true }))
  .pipe(out);
