import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function view(state$?: Stream<VNode>): Stream<VNode> {
  return xs.of(
    <nav className='menubar'>
      <ul className='menus'>
        <li className='menu'>
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