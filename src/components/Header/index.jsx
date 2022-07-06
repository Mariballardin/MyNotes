import { RiShutDownLine } from 'react-icons/ri';



import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/Mariballardin.png"
        alt="Foto do usuário"
        />

        <div>
          <span>Bem-vinda</span>
          <strong>Mariana Ballardin</strong>
        </div>
      </Profile>

        <Logout>
          <RiShutDownLine />
        </Logout>
    </Container>

  )
}