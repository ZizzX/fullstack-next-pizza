import { Container, Title, TopBar } from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
        </>
    );
}
