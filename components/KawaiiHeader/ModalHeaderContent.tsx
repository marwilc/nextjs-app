import { Grid, Header } from 'semantic-ui-react'

import { PosMeMuero } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <PosMeMuero size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste el aguacate</Header>
            <div>Lo tocaste tanto que lo mataste.</div>
            <div>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
