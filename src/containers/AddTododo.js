import React from 'react'
import { connect } from 'react-redux'
import { addTododo } from '../actions'

const AddTododo = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTododo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Console Thingy
        </button>
      </form>
  )
}

export default connect()(AddTododo)
