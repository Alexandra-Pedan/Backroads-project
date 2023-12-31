import { pageLinks } from '../data'

function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
