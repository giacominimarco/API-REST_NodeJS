import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { AlertDiv } from "./style.js";

import "./style.css";

export default function Form() {
	const [name, setName] = useState("");
	const [crm, setCrm] = useState("");
	const [phone, setPhone] = useState("");
	const [number, setNumber] = useState([0, ""]);

	const history = useHistory();

	async function signUpDoctor(event) {
		event.preventDefault();
		try {
			await api.post("/doctors", { name, crm, phone });
			history.push("/doctorlist");
		} catch (error) {
			setNumber([2, error.response.data.message]);
		}
	}

	return (
		<>
			<div className="form">
				<h2>Cadastre agora!</h2>

				<form onSubmit={signUpDoctor}>
					<input
						type="text"
						placeholder="Nome"
						value={name}
						required={true}
						minLength={8}
						onChange={(event) => setName(event.target.value)}
					/>
					<input
						type="text"
						placeholder="CRM"
						value={crm}
						required={true}
						minLength={5}
						maxLength={5}
						onChange={(event) => setCrm(event.target.value)}
					/>
					<input
						type="text"
						placeholder="Telefone"
						value={phone}
						required={true}
						minLength={10}
						onChange={(event) => setPhone(event.target.value)}
					/>

					<button type="submit">Enviar</button>
				</form>


			</div>
			{number[0] >= 1
				? setTimeout(() => {
					setNumber([0, ""]);
				}, 5000)
				: ""}
			{number[0] === 2 ? (
				<AlertDiv>
					<Alert severity="error">
						<AlertTitle>Erro!</AlertTitle>
						<strong>{number[1]}</strong>
					</Alert>
				</AlertDiv>
			) : number[0] === 1 ? (
				<AlertDiv>
					<Alert severity="success">
						<AlertTitle>Sucesso!</AlertTitle>
						<strong>{number[1]}</strong>
					</Alert>
				</AlertDiv>
			) : (
						""
					)}
		</>
	);
}
