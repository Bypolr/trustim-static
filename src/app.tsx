import xs, { Stream } from 'xstream';
import { VNode, div, h2 } from '@cycle/dom';
import { Sources, Sinks } from './interfaces';

import Menubar from './Menubar';
import Chatbox from './Chatbox';

export function App(sources : Sources) : Sinks
{
  const menubar: Sinks = Menubar(sources);
  const chatbox: Sinks = Chatbox();

  const components: Stream<VNode>[] = [
    menubar,
    chatbox,
  ].map((sink) => sink.DOM);

  const vdom$: Stream<VNode> = xs.combine(...components)
    .map(([mb, cb]) => {
      return div('.container.flex', [
        mb,
        /* right */
        div('.right-wrap.column.flex',[
          /* menubar expand area */
          div('.menubar-expand'),

          div('.right-inner.flex.column', [
            div('.column.messages-wrap.flex'),
            div('.chatbox-wrap', cb),
          ])
        ]),
      ]);
    });

    return {
        DOM: vdom$
    };
}
