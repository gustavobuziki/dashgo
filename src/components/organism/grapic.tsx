import dynamic from "next/dynamic"

import { Box, Text, theme } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"

interface GrapicProps {
    title: string
}

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

export const Grapic = ({ title }: GrapicProps) => {
    const series = [
        {name: 'series1', data: [100, 25, 58, 99, 159, 90, 77] }
    ]

    const options:ApexOptions = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false
        }, 
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        }, 
        xaxis: {
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                new Date("2022-03-23T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-24T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-25T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-26T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-27T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-28T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
                new Date("2022-03-29T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" })
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3
            }
        }
    }

    return (
        <Box p={['6', '8']} borderRadius='8' bg='gray.800'>
            <Text fontSize='lg' mb='4'>
                {title}
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
        </Box>
    )
    }