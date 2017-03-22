// Chatbox

import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function view(state$?: Stream<VNode>): Stream<VNode> {
  return xs.of(
    <div className='chatbox'>
      <div className='inner flex'>
        <textarea rows='1' placeholder='Type something ...' className='input js-input'></textarea>
        <div className='column chatbox-tool flex'>
          <span className='iconfont tool js-attach'>&#xe671;</span>
          <span className='iconfont tool js-emoji'>&#xe641;</span>
          <span className='iconfont tool tool-send js-send'>&#xe8a6;</span>
        </div>
      </div>
    </div>
  );
}

export default function Chatbox(Sources?: Sources): Sinks {
  const vdom$: Stream<VNode> = view();

  return {
    DOM: vdom$,
  };
}