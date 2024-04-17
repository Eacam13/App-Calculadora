import React, { useState, useEffect } from 'react'
import { Container, 
         Title, 
         InputValue, 
         ButtonCalc, 
         Buttontext, 
         TextResult, 
         ContainerButtons,
         ContainerResult 
        } from './styles'
import ButtonCalcOperator from '../../components/ButtonCalc'
import { listButtonCalc } from '../../data/listButtonsCalc'
import { handleCalculate } from '../../functions/operationsCalc'

export default function Home() {

    const [expression, setExpression] = useState('')
    const [result, setResult] = useState('')
    const [isParenthesis, setIsParenthesis] = useState(false)

    useEffect(() => {
        if (expression === '') {
            setIsParenthesis(false)
        }
    }, [expression])


    const countParentheses = (exp: string) => {
        let countOpen = 0
        let countClose = 0
        exp.split('').forEach(char => {
            if (char === '(') {
                countOpen++
            } else if (char === ')') {
                countClose++
            }
        })
        return { countOpen, countClose }
    }


    const handlePressButton = (value: string | number) => {
        console.log('Valor do botão:', value)
        console.log('Expressão atual:', expression)
        if (value === 'AC') {
            setExpression('')
        }else if (value === '=') {
            handleCalculate({ expression, setResult })
        } else if (value === '()') {
            const { countOpen, countClose } = countParentheses(expression)
            if (countOpen === countClose) {
                setExpression(prevExpression => prevExpression + '(')
            } else if (countOpen > countClose) {
                setExpression(prevExpression => prevExpression + ')')
            } else {
                setExpression(prevExpression => prevExpression + '(')
            }
        } else if (value === 'ico') {
    
            setExpression(prevExpression => prevExpression.slice(0, -1))
        } else {
            setExpression(prevExpression => prevExpression + value)
        }
    }

    const buttons = listButtonCalc.map((value, index) => (
        <ButtonCalcOperator 
            key={index} 
            value={value} 
            handleCalculate={handlePressButton} 
            expression={expression} 
            setResult={setResult}
        />
    ))


    return (
        <Container>
            <Title>Calculadora</Title>
            <InputValue
                value={expression}
                onChangeText={(text) => setExpression(text)}
                placeholder='Digite uma expressão...'
                selectionColor='#0c0c0c'
            />
            <ContainerResult backColor={result ?  '#c7bccc' : '#1b2417'}>
                <TextResult>{result}</TextResult>
            </ContainerResult>
            <ContainerButtons>
                {buttons}
            </ContainerButtons>
        </Container>
    )
}