import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { Container, AlertDiv } from "./style";
import { Alert, AlertTitle } from "@material-ui/lab";
import Select from 'react-select'


export default function Profile() {
	const { id } = useParams();
	const [doctor, setDoctor] = useState([]);
	const [updateName, setUpdateName] = useState(doctor.name);
	const [updateCrm, setUpdateCrm] = useState(doctor.crm);
	const history = useHistory();
	const [number, setNumber] = useState([0, ""]);


	// useEffect(() => {
	// 	async function load() {
	// 		const response = await api.get("/specialties");
	// 		const listSpecialties = response.data.specialties;
	// 	}
	// 	load();
	// }, []);

	useEffect(() => {
		const doctorId = id;
		async function load() {
			const response = await api.get(`doctor/${doctorId}`);
			setDoctor(response.data.doctor);
		}
		load();
	}, [id]);

	async function handleEditDoctor(event) {
		event.preventDefault();
		const data = {
			name: updateName,
			crm: updateCrm,
		};
		try {
			await api.put(`/doctor/${id}`, data);
			setNumber([1, "Usuário editado com sucesso!"]);
			history.push('/doctorlist')
		} catch (error) {
			setNumber([2, error.response.data.errors[0].message]);
		}
	}
	async function handleCancelDoctor() {
		history.push("/doctorList");
	}

	return (
		<Container>
			<h1>
				Edição de <span>médico</span>
			</h1>

			<div className="doctor">
				<form onSubmit={handleEditDoctor}>
					<label>
						Nome:
            <input
							defaultValue={doctor.name}
							onChange={(event) => setUpdateName(event.target.value)}
						/>
					</label>
					<label>
						CRM:
             <input
							defaultValue={doctor.crm}
							onChange={(event) => setUpdateCrm(event.target.value)}
						/>
					</label>

					<select>
					</select>

					<div className="buttons">
						<button onClick={(event) => handleCancelDoctor()}>Cancelar</button>
						<button type="submit">Enviar</button>
					</div>
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
		</Container>
	);
}
