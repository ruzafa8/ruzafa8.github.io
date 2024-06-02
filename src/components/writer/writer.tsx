/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

interface IWriter {
  items: string[]
}

const cursorBlink = keyframes`
  from {
    border-right-color: rgba(255,255,255,.75);
  }
  to {
    border-right-color: transparent;
  }
`

const Typewrite = styled.span`
  border-right: 2px solid rgba(255,255,255,.75);
  animation: ${cursorBlink} 500ms steps(44) infinite;
`

const Writer = ({ items }: IWriter) => {
  const
    [tick, setTick] = useState(false),
    [repeat, setRepeat] = useState(true),
    [text, setText] = useState(''),
    [currentWord, setCurrentWord] = useState(0),
    [write, setWrite] = useState(true)

  const deleteText = () => {
    if (text === '') {
      setCurrentWord(currentWord => {
        if (currentWord + 1 === items.length) {
          setRepeat(false)
          return currentWord
        }
        setWrite(true)
        setText('')
        return currentWord + 1
      })
    }
    // delete all "html <tags>" in one go
    if (text[text.length - 1] === '>') {
      const startOfTag = text.lastIndexOf('<')
      setText(text => text.substring(0, startOfTag))
    } else
      setText(text => text.substring(0, text.length - 1))
    new Promise(resolve => setTimeout(resolve, 100 - Math.random() * 50))
      .then(() => repeat && setTick(tick =>! tick))
  }

  const addText = () => {
    if (currentWord === items.length - 1 && text === items[currentWord]) {
      setRepeat(false)
      return
    }
    if (text === items[currentWord]) {
      setWrite(false)
    }
    // add all "html <tags>" in one go
    console.log('text[text.length]', items[currentWord][text.length])
    if (items[currentWord][text.length] === '<') {
      const endOfTag = items[currentWord].indexOf('>', text.length)
      console.log('endOfTag', endOfTag)
      setText(text => text + items[currentWord].substring(text.length, endOfTag))
    } else
      setText(text => items[currentWord].substring(0, text.length + 1))
    new Promise(resolve => setTimeout(resolve, 200 - Math.random() * 100))
      .then(() => repeat && setTick(tick =>! tick))
  }

  const timerFn = () => {
    if (write) {
      addText()
    } else {
      deleteText()
    }
  }

  useEffect(() => {
    const timer = setTimeout(timerFn)
    return () => clearTimeout(timer)
  }, [tick])

  
  return (
    <div>
      <Typewrite className='typewrite' dangerouslySetInnerHTML={{__html: text}}></Typewrite>
    </div>
  );
}

export default Writer;