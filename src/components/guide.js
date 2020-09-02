import React, { Component } from 'react'

import './guide.css'

export default class Guide extends Component {
    example = [{
        formName: "All values should be in quote",
        fields: [
            {
                label: 'string',
                type: `'numberfield' || 'textfield' || 'textarea' || 'checkbox' || 'datefield' || 'radio'`,
                value: 'string',
            },
            {
                label: 'string',
                type: 'numberfield',
                value: 365,
            },
            {
                label: 'string',
                type: 'date',
                value: 'YYYY-MM-DD',
            },
            {
                label: 'string',
                type: 'checkbox',
                value: null,
            },
            {
                label: 'string',
                type: 'radio',
                value: [
                    'First',
                    'Second',
                    '...'
                ],
            },
        ],
        buttons: [
            {
                "label": 'First',
                "color": `'green' || 'red' || 'yellow' || 'grey' || 'blue' || 'white'`
            },
            {
                "label": 'Next button label',
                "color": 'yellow'
            },
        ]
    }
    ]
    render() {
        const {guideOpened} = this.props
        return (
            <pre className = {guideOpened ? "guide opened": "guide"}>
                <div className = "guide_name">Syntax Guide</div>
                <ul className = "guide_warning">
                    <li>Please do not change the name of JSON data but only value</li>
                    <li>Use copy-paste to add new object</li>
                    <li>Keep all curly braces and square brackets</li>
                </ul>
                <div className = "guide_warning">Example of correct inputs:</div>
                {JSON.stringify(this.example, null, 1)}
            </pre>
        )
    }
}
