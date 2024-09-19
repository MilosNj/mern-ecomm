import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

import { useProductStore } from "../store/product.store";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const { deleteProduct, updateProduct } = useProductStore();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");
	const toast = useToast();

	const handleDeleteProduct = async (id) => {
		const { success, message } = await deleteProduct(id);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
	};

	const handleUpdate = async (id, updatedProduct) => {
		const { success, message } = await updateProduct(id, updatedProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
			onClose();
		}
	};

	return (
		<Box
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			transition="all 0.3s"
			bg={bg}
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
		>
			<Image
				src={product.image}
				alt={product.name}
				h={48}
				w="full"
				objectFit="cover"
			/>
			<Box p={4}>
				<Heading as="h3" size="md" mb={2}>
					{product.name}
				</Heading>
				<Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
					${product.price}
				</Text>
				<HStack spacing={2}>
					<IconButton
						icon={<MdEdit fontSize={30} />}
						colorScheme="blue"
						onClick={onOpen}
					/>
					<IconButton
						icon={<MdDelete fontSize={30} />}
						colorScheme="red"
						onClick={() => handleDeleteProduct(product._id)}
					/>
				</HStack>
			</Box>
			<ProductModal
				isOpen={isOpen}
				onClose={onClose}
				updatedProduct={updatedProduct}
				setUpdatedProduct={setUpdatedProduct}
				handleUpdate={handleUpdate}
				productId={product._id}
			/>
		</Box>
	);
};

export default ProductCard;
