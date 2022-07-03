import React from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

export default function NavBar() {
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Form className="d-flex w-100">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2 "
								aria-label="Search"
							/>
							<Button variant="secondary">Search</Button>
						</Form>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
