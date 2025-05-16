export enum NavBarItems {
  AboutMe,
  Projects,
  ContactMe,
}

export function setUrlFragment(index: number): void {
  const fragment = NavBarItems[index].toString();
  const newUrl = `${window.location.href.split('#')[0]}#${fragment}`;
  window.location.href = newUrl;
}

export function getIndexFromUrlFragment(): number | null {
  const url = window.location.href.split('#');
  if (url.length > 0) {
    const fragment = url[1] as keyof typeof NavBarItems;
    if (fragment in NavBarItems && isNaN(Number(fragment))) {
      return NavBarItems[fragment];
    }
  }
  return null;
}
