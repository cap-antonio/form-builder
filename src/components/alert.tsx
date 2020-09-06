import React, { Component } from 'react'

import './alert.css'

type AlertPropsType = {
    status: string
}

export default class Alert extends Component<AlertPropsType> {

    statusPicker(status: string) {
        switch (status) {
            case 'success':
                return <div>
                    <strong>
                        <i className="fa fa-check-circle alert_i" />
                        You got it!
                    </strong> New form saved.
                </div>
            case 'secondary':
                return <div>
                    <strong>
                        <i className="fa fa-exclamation-circle alert_i" />
                        Done!
                    </strong> A new JSON has been set.
                </div>
            case 'warning':
                return <div>
                    <strong>
                        <i className="fa fa-recycle alert_i" />
                        Moved away!
                    </strong> You can create new form.
                </div>
            default:
                return <div>
                <strong>
                    Oops!
                </strong> This message should not appear.
            </div>
        }
    }

    render() {
        const { status } = this.props
        return (
            <div className={`alert alert-${status} alert_status`}>
                {this.statusPicker(status)}
            </div>
        )
    }
}