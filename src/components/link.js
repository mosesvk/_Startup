/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
// we are renaming Link as 'A' because we already have a component named Link
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path} >
      {children || label}
    </A>
  );
}
