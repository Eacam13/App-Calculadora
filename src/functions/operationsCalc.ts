import React from 'react'
import { evaluate } from 'mathjs'

interface CalculateParams {
    expression: string
    setResult: React.Dispatch<React.SetStateAction<string>>
}

export const handleCalculate = ({ expression, setResult }: CalculateParams) => {
    try {
        const modifiedExpression = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/,/g,  '.')
        console.log('Expressão modificada:', modifiedExpression)
        const calculatedResult = evaluate(modifiedExpression)
        console.log('Resultado calculado:', calculatedResult)
        setResult(calculatedResult.toLocaleString(undefined, { maximumFractionDigits: 10 }))
    } catch (error) {
        setResult('Erro ao calcular')
    }
}