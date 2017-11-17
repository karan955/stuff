import React from 'react'
import SmallMap from './SmallMap'

const AccidentInfo = () => (
<div>
<div className="col-lg-4">
  <SmallMap />
</div>

<div className="col-lg-8">
<h3>Accident Description</h3>
<p>This is a description of the accident as told by the party who filed the auto
claim with <br /> our application. The party stated that they were stopped at the
red light <br /> at the intersection, and the other party failed to stop and rear-ended
the vehicle. <br /> The speed of the vehicle was determined to be in excess of the 35MPH speed
limit posted.</p>
</div>
</div>
)

export default AccidentInfo
