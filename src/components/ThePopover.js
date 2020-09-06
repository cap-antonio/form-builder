  
import React, { Component } from 'react'
import Popover, { ArrowContainer } from 'react-tiny-popover'

export default class ThePopover extends Component {
    render() {
        const { hintShow, toggleHint, popoverText, child } = this.props
        return <Popover
        isOpen={hintShow}
        position={'top'}
        onClickOutside={() => toggleHint(false)}
        content={({ position, targetRect, popoverRect }) => (
            <ArrowContainer
                position={position}
                targetRect={targetRect}
                popoverRect={popoverRect}
                arrowColor={'black'}
                arrowSize={10}
                arrowStyle={{ opacity: 0.6 }}
            >
                {popoverText}
            </ArrowContainer>
        )}
    >
        {child}
    </Popover>
      }
}