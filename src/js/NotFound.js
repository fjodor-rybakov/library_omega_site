import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <p> Страница не найдена.</p>
                <li><Link to='/'>Главная</Link></li>
            </div>
        )
    }
}