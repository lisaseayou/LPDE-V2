import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 600px;
height: 400px;
margin: 100px;
background-color: #20212A;
display: flex; 
justify-content: center;
align-items: center;
margin: auto;
margin-bottom: 50px;
border-radius: 20px;
`;

const TextField = styled.input`
height: 40px;
width: 400px;
border-radius: 10px;
margin-top: 15px;
margin-bottom: 10px;
padding: 10px;
border: none;
`;
const Textarea = styled.textarea`
height: 80px;
width: 400px;
border-radius: 10px;
margin-top: 15px;
margin-bottom: 10px;
padding: 10px;
border: none;
`;
const Button = styled.button`
padding: 10px;
border-radius: 10px;
background-color: #20212A;
color: white;
border: 1px solid white;
display: flex;
justify-content: center;
cursor: pointer;
&:hover {
    background-color: white;
    color: #20212A;
    border: 1px solid #20212A;
}

`;

const Title = styled.p`
font-size: 30px;
font-family: Verdana;
color: #20212A;
text-align: center;
`;
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Merci!</div>
        <div className="text-md">Nous vous répondons rapidement !</div>
      </>
    );
  }

  return (
    <>
    <Title>Contactez-nous </Title>
    <Container>
    <form
      onSubmit="submit"
      method="post"
      data-netlify="true"
      name="contactLPDE"
    >
      <div>
      <input type="hidden" name="form-name" value="contact" />
        <TextField
          type="text"
          placeholder="Votre nom"
          name="name"
          required
        />
      </div>
      <div>
        <TextField
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Votre Message"
          name="message"
          required
        />
      </div>
      <div>
        <Button
          type="submit"
        >
          Envoyer un message
        </Button>
      </div>
    </form>
    </Container>
    </>
  );
};

export default ContactForm;