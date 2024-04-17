import React from 'react'
import { TextButtonOperator, ButtonOperator  } from './styles'
import { Ionicons } from '@expo/vector-icons'

interface ButtonCalcOperatorProps {
    value: any
    handleCalculate: (value: any) => void
    expression: string
    setResult: React.Dispatch<React.SetStateAction<string>>
}

export default function ButtonCalcOperator({ value, handleCalculate }: ButtonCalcOperatorProps) {
    
    if (value === "ico") {
        return (
            <ButtonOperator onPress={() => handleCalculate(value)}>
                <Ionicons name="backspace" size={24} color="black" /> 
            </ButtonOperator>
        )
    }
    
    return (
        <ButtonOperator onPress={() => handleCalculate(value)}>
            <TextButtonOperator>{value}</TextButtonOperator>
        </ButtonOperator>
    )
}