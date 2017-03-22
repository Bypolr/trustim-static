import xs, { Stream } from 'xstream';
import { VNode, div, h2 } from '@cycle/dom';
import { Sources, Sinks } from './interfaces';

import Menubar from './Menubar';

export function App(sources : Sources) : Sinks
{
  const menubar: Sinks = Menubar();
  const vdom$: Stream<VNode> = menubar.DOM
    .map((mb) => {
      return div([
        mb,
        div([
          h2('Hello World'),
        ])
      ]);
    });

    return {
        DOM: vdom$
    };
}
