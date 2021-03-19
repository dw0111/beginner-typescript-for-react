import React, { useState } from "react";
import styled from 'styled-components'

const statusToColor = {
  "Alive": "green",
  "Dead": "red",
  "unknown": "darkgrey"
}

type StatusProps = {
  status: "Alive" | "Dead" | "unknown",
}
const Status = styled.div<StatusProps>`
  width: 20px;
  height: 20px;
  background: ${(props) => statusToColor[props.status]};
  border-radius: 50%;
`

type NotesProps = {
  event: React.ChangeEvent<HTMLInputElement>,
  value: string
}
const Notes = styled.input<NotesProps>`
  width: 100%;
`

type CharacterProps = {
  name: string,
  image: string,
  status: "Alive" | "Dead" | "unknown"
}

function Character({ name, image, status }: CharacterProps) {
  const [notes, setNotes] = useState("")

  return (
    <article>
      <h3>{name}</h3>
      <img src={image} alt="" />
      <Status status={status} />
      <Notes value={notes} onChange={(event) => setNotes(event.target.value)} />
    </article>
  );
}

export default Character;
