// menubar component

import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function view(state$?: Stream<VNode>): Stream<VNode> {
  return xs.of(
    <nav className='menubar flex'>
      <div className="column user-icon-wrap flex">
        <a href="#" className="user-icon-link">
          <div className="user-icon"></div>
        </a>
      </div>
      <ul className='menus column'>
        <li className='menu selected'>
          <span className='menu-icon iconfont'>&#xe607;</span>
        </li>
        <li className='menu'>
          <span className='menu-icon iconfont'>&#xe787;</span>
        </li>
      </ul>
    </nav>
  );
}

export default function Menubar(sources?: Sources): Sinks {
  const vdom$: Stream<VNode> = view();

  return {
    DOM: vdom$
  };
}