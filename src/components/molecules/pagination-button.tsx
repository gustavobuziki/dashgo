import { Button } from "@chakra-ui/react"

interface PaginationButtonProps {
    isCurrent?: boolean,
    number: number,
}

export const PaginationButton = ({ isCurrent, number }: PaginationButtonProps) => {
    return (
        isCurrent ? (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bg: 'pink.500',
                    }}
            >
                {number}
            </Button>
        ) : (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                bg='gray.700'
                _hover={{
                    bg:'gray.500'
                }}
            >
                {number}
            </Button>
        )
    )
}