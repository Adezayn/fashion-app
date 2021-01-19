import React from 'react';
import Card from '../Card/index';
import {Row, Col} from 'react-materialize';


const Index = () => {
    return (
  <div>
      <Row>
          <Col  m={4} s={12}>
            <Card>
                <h5 className="center-align black-text">Wale</h5>
                <p className="black-text">lorem 30 bjhbhev f vbhfvbefv fhfvbfv  fhfbf fbf bvvui
                    vffvuhefvb vviopqvrjn vuhuhbn nvpjorvj vbvbvb vjgb bo bvbvb vbivvbu
                    fvbvbfbfv bvfbvfbvfvn vbibuib vhvhvj.
                </p>
            </Card>
          </Col>
          <Col  m={4} s={12}>
            <Card>
                <h5 className="center-align black-text">Deborah</h5>
                <p className="black-text">lorem 30 bjhbhev f vbhfvbefv fhfvbfv  fhfbf fbf bvvui
                    vffvuhefvb vviopqvrjn vuhuhbn nvpjorvj vbvbvb vjgb bo bvbvb vbivvbu
                    fvbvbfbfv bvfbvfbvfvn vbibuib vhvhvj.
                </p>
            </Card>
          </Col>
          <Col  m={4} s={12}>
            <Card>
                <h5 className="center-align black-text">Adedeji</h5>
                <p className="black-text">lorem 30 bjhbhev f vbhfvbefv fhfvbfv  fhfbf fbf bvvui
                    vffvuhefvb vviopqvrjn vuhuhbn nvpjorvj vbvbvb vjgb bo bvbvb vbivvbu
                    fvbvbfbfv bvfbvfbvfvn vbibuib vhvhvj.
                </p>
            </Card>
          </Col>
      </Row>
  </div>
    )
}

export default Index;