import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import AddTodo from 'AddTodo'

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })

    it('should call on AddTodo prop with valid data', () => {
        var todoText = 'Check mail'
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toHaveBeenCalledWith(todoText)
    })

        it('should NOT call on AddTodo prop with invalid data', () => {
        var todoText = ''
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toNotHaveBeenCalled()
    })
})