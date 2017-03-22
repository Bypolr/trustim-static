// ExpandContact

import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function view(state$?: Stream<VNode>): Stream<VNode> {
  return xs.of(
    <div className="menubar-expand expand-contact">

    </div>
  );
}

export default function ExpandContact(sources?: Sources): Sinks {
  const vdom$: Stream<VNode> = view();

  return {
    DOM: vdom$
  };
}