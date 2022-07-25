import { Accordion } from 'flowbite-react'
import React from 'react'

const Try = () => {
  return (
    <React.Fragment>
      <Accordion flush={true} alwaysOpen={true}>

        <Accordion.Panel>
          <Accordion.Title>
            Item 1
          </Accordion.Title>
          <Accordion.Content>
            <p>hello item 1 content</p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            Item 2
          </Accordion.Title>
          <Accordion.Content>
            <p>hello item 2 content</p>
          </Accordion.Content>
        </Accordion.Panel>

      
      </Accordion>
    </React.Fragment>
  )
}

export default Try