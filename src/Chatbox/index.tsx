// Chatbox

import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function view(state$?: Stream<VNode>): Stream<VNode> {
  return xs.of(
    <div className="chatbox flex">
      <textarea rows="1" placeholder="Type something ..." className="input js-input"></textarea>
    </div>
  );
}

export default function Chatbox(Sources?: Sources): Sinks {
  const vdom$: Stream<VNode> = view();

  return {
    DOM: vdom$,
  };
}