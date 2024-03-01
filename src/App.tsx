import React, {createContext} from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desstruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - utilizando contexto
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;

type fixed =  "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppcontext{
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppcontext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "Ale";
  const age: number = 30
  const isWorking: boolean = false
  // 2 - funções
  const userGreeting = (name: string): string =>{
    return `Olá, ${name}`
  };

  // 8 - type
  const myText : textOrNull = "Tem algum texto aqui";
  const mySecondText : textOrNull = null;

  //mySecondText = "opa";

  const testandoFixed:fixed = "Isso";

  // 9 - contxt
  const contexValue: IAppcontext = {
    language: "Javascript",
    framework: "Expreaa",
    projects: 5
  }

  return (
    <AppContext.Provider value = {contexValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (//if
          <p>Está trabalhando!</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo"/>
        <Destructuring title="Primeiro post" content = "Algum conteudo" commentsQty={10} tags={["ts","js"]} category = {Category.TS}/>

        <State/>
        {myText &&
          <p>Tem texto na variavel</p>
        }
        {mySecondText &&
          <p>Tem texto na variavel</p>
        }
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
