export const javaContent = `public class AkashSareen extends SoftwareEngineer implements Mentor {

    private final String currentRole = "Software Engineer @ Goldman Sachs";
    private final int yearsOfExperience = 5;
    
    private final List<String> coreStack = List.of("React", "TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "AWS", "GraphQL");

    public CompletableFuture<Deployment> shipToProduction(Project concept) {
        return CompletableFuture.supplyAsync(() -> concept.architect(Architecture.SCALABLE))
                .thenApply(Project::develop)
                .thenApply(p -> p.test(TestStrategy.EXHAUSTIVE))
                .thenAccept(CloudPlatform.AWS::deploy);
    }

    public void elevateTeam(Developer junior) {
        Stream.generate(() -> junior).takeWhile(dev -> !dev.isConfident())
                .forEach(dev -> dev.absorb(this.getExperience()).practice(Code.CLEAN));
    }

    @Override
    public String toString() {
        return String.format("%s | %d+ Years Architecting Resilient Systems", currentRole, yearsOfExperience);
    }
}
`;