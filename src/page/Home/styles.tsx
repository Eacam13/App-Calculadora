import { ViewProps } from "react-native"
import styled from "styled-components/native"

interface ContainerResultProps extends ViewProps {
    backColor: string;
}

export const Container = styled.View`
    flex: 1;
    background: #1b2417;
    align-items: center;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 40px;
    margin-top: 48px;
    text-align: center;
`
export const InputValue = styled.TextInput`
    width: 80%;
    height: 80px;
    border-radius: 8px;
    padding: 16px;
    font-size: 26px;
    color: #403f41;
    background: #c7bccc;
    margin-top: 30px;
`
export const ContainerButtons = styled.View`
    border-radius: 8px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    margin-top: 20%;
    gap: 6px;
    padding: 6px;
    
`
export const ButtonCalc = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: #fbc2eb;
    width: 80%;
    height: 48px;
    border-radius: 8px;
    margin-bottom: 16px;
    margin-top: 30px;
`
export const Buttontext = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #060c03;
`
export const ContainerResult = styled.View<ContainerResultProps>`
    width: 80%;
    height: 40px;
    border-radius: 8px;
    font-size: 26px;
    background: ${(props) => props.backColor};
    margin-top: 8px;
    align-items: flex-end;
    justify-content: center;
    padding-right: 10px;
`
export const TextResult = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #080808;
`