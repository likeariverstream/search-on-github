import { memo, FC } from 'react';
import { PaginationProps } from './interface'
import styles from './styles.module.css'

export const Pagination: FC<PaginationProps> = memo((props) => {
  const { limit = 30, indent = 1, page = 1, count, makeLink, onChange } = props
  const length = Math.ceil(count / Math.max(limit, 1));

  if (page === null) {
    return
  }
  let left = Math.max(page - indent, 1);
  const right = Math.min(left + indent * 2, length);
  left = Math.max(right - indent * 2, 1);

  const items = [];
  if (left > 1) {
    items.push(1)
  }
  if (left > 2) {
    items.push(null)
  }
  for (let page = left; page <= right; page++) {
    items.push(page)
  }
  if (right < length - 1) {
    items.push(null)
  }
  if (right < length) {
    items.push(length)
  }

  const onClickHandler = (num: number | null) => (e: Event) => {
    if (onChange) {
      e.preventDefault();
      onChange(num);
    }
  }

  return (
    <ul className={styles.list}>
      {items.map((num, index) => (
        <li key={index}
          className={`${styles.item} ${num === page ? styles.item_active : ''} ${!num ? styles.item_split : ''}}`}
          onClick={() => onClickHandler(num)}>
          {num
            ? (makeLink
              ? <a href={makeLink(num)}>{num}</a>
              : num
            )
            : '...'
          }
        </li>
      ))}
    </ul >
  )
})
