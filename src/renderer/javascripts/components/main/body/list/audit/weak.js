import React from 'react'
import shortid from 'shortid'
import Item from '../item'

const Weak = ({ entries }) => {
  const { i18n } = window
  if (entries.length === 0) return null

  return (
    <div className="audit-group level-one">
      <div className="title">{i18n('Weak')}</div>
      {entries.map(item => (
        <Item entry={item} key={shortid.generate()} />
      ))}
    </div>
  )
}

export default Weak
