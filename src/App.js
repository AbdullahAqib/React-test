import logo from "./logo.svg"
import "./App.css"
import { ChakraProvider, Heading } from "@chakra-ui/react"
import Payment from "./pages/Payment"

function App() {
	return (
		<ChakraProvider>
			<Payment />
		</ChakraProvider>
	)
}

export default App
