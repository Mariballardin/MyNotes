import { Container, Links, Content } from "./styles";


import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  // aqui é a interface que vai exibir algo
  return (
    <Container>
    <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam commodi, molestias qui animi obcaecati atque voluptas officia dolore amet porro non, a, sequi sapiente minus molestiae eveniet blanditiis quam!</p>
        <Section title="Links úteis"> 
        <Links>
          <li><a href="http://rocketseat.com.br"></a></li>
          <li><a href="http://rocketseat.com.br"></a></li>
        </Links>

      </Section>

      <Section title="Marcadores"> 
        
        <Tag title="express" />
        <Tag title="nodejs" />
      
      </Section>

      <Button title="Voltar"/>
      </Content>
    </main>
    </Container>
    )
  }