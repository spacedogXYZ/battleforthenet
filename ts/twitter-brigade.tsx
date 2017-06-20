/// <reference path="../typings/index.d.ts" />

import * as React from 'react';

interface Props {
	setModal: (modal: string | null)=>any
}

interface State {
}

export class TwitterBrigade extends React.Component<Props, State> {
	render() {
		return (
            <div>
              <header>
                <h2>Join with Twitter to defend the Internet!</h2>
                <p>There are countless battles that need to be won to keep the Internet open. From protecting net neutrality to stopping secret deals that could censor the net, we need your help. Will you let us automatically post urgent alerts from your Twitter account, about once a week? (You can <a href="https://support.twitter.com/articles/76052-connecting-or-revoking-third-party-applications#revokeaccess">opt out</a> at any time, of course.)</p>
              </header>
              <footer>
                <form action="//radiant-earth-4575.herokuapp.com/auth/twitter_prep" method="POST">
                  <input type="hidden" name="frequency" value="1" />
                  <button id="twitter_submit_button" class="twitter-share-container" type="submit">
                    <img src="/images/share/twitter_white.svg" />
                    <span>Join with Twitter</span>
                  </button>
                </form>
                <a href="https://twitter.com/intent/tweet?related=fightfortheftr&text=ISPs should *not* control what we read/watch/say online. That’s %23NetNeutrality %26 now it's under attack. Defend it! https://www.battleforthenet.com" target="_blank" class="twitter">Nope, just tweet once</a>
              </footer>
            </div>
		);
	}
}

