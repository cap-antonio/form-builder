  
import React, { Component } from 'react'
import Popover, { ArrowContainer } from 'react-tiny-popover'

type ThePopoverPropsType = {
    hintShow: boolean, 
    toggleResetHint: (status: boolean) => void, 
    popoverText: any, 
    child: any
}

export default class ThePopover extends Component<ThePopoverPropsType> {
    render() {
        const { hintShow, toggleResetHint, popoverText, child } = this.props
        return <Popover
        isOpen={hintShow}
        position={'top'}
        onClickOutside={() => toggleResetHint(false)}
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