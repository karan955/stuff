import React from 'react'
import SmallMap from './SmallMap'

const ClaimInfo = () => (
<div>
<div>
<h3>Claim On 11/17/17 At 9:00 AM</h3>

<div className="col-lg-4">
  <SmallMap />
</div>

<div className="col-lg-4">
</div>

<div className="col-lg-4">
  <dl className="incidentData">
    <dt>Involved Information: </dt>
    <dd>Yes</dd>

    <dt>Witnesses: </dt>
    <dd>Yes</dd>

    <dt>Police Report: </dt>
    <dd>Yes</dd>

    <dt>License Plate Photos: </dt>
    <dd>Yes</dd>

    <dt>Scene Photos: </dt>
    <dd>Yes</dd>

    <dt>Accident Diagram: </dt>
    <dd>Yes</dd>

    <dt>Accident Description: </dt>
    <dd>Yes</dd>

    <dt>Injury Diagram: </dt>
    <dd>Yes</dd>
  </dl>
</div>
</div>
</div>
)

export default ClaimInfo
