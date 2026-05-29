import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './components/Button';

afterEach(cleanup);

describe('Composant Button', () => {
    // Nouveau test pour valider l'affichage dynamique via children
    it('affiche dynamiquement le texte passé en tant que children!".', () => {
        // 1. Arrange : On passe le texte "Envoyer" à l'intérieur des balises
        render(<Button>Envoyer</Button>);
        // 2. Act & Assert
        const buttonElement = screen.getByRole('button', { name: /envoyer/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it('devient rouge lorsque la prop color est red', () => {
        // 1. Arrange : On passe la prop isRed à true
        render(<Button color="red">Click me!</Button>);
        
        // 2. Act : On récupère le bouton
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
        
        // 3. Assert : On vérifie que le style contient la couleur rouge
        // 'background-color' ou 'color' selon ce que vous souhaitez tester (ici le fond)
        expect(buttonElement).toHaveStyle('background-color: red');
    });

    //comportement au clic
    it('appelle la fonction onClick passée en prop lors d\'un clic', () => {
        // 1. Arrange : On crée une fonction fictive (mock) avec Jest
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me!</Button>);
        
        // 2. Act : On récupère le bouton et on simule un clic dessus
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
        fireEvent.click(buttonElement);
        
        // 3. Assert : On vérifie que la fonction fictive a bien été appelée exactement 1 fois
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
      //comportement au clic
    it('applique les props supplémentaires comme className au bouton', () => {
        
        render(<Button className="my-custom-class">Click me!</Button>);
        
        // 3. Assert : On vérifie que le props est bien appliqué
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
        expect(buttonElement).toHaveClass('my-custom-class');
    });
    
    it('le bouton peut être désactivé via une prop disabled. n', () => {
        
       // 1. Arrange : On rend le bouton avec la prop disabled à true
        render(<Button disabled={true}>Click me!</Button>);
    
        // 2. Act : On récupère le bouton
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
    
        // 3. Assert : On vérifie qu'il est bien désactivé
        expect(buttonElement).toBeDisabled();
    });

    // Nouveau test pour le changement dynamique de prop
    it('change de couleur lorsque la prop color change après le montage initial', () => {
        // 1. Premier montage : On affiche le bouton en bleu
        const { rerender } = render(<Button color="blue">Click me!</Button>);
        
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
        // On vérifie qu'il est bien bleu au départ
        expect(buttonElement).toHaveStyle('background-color: blue');

        // 2. Act : On force le rendu à nouveau avec une prop color différente (ex: vert)
        rerender(<Button color="green">Click me!</Button>);

        // 3. Assert : On vérifie que le style s'est mis à jour dynamiquement
        expect(buttonElement).toHaveStyle('background-color: green');
    });
    it('applique un padding plus grand lorsque la prop large est true', () => {
            // 1. Arrange : On rend un bouton classique et un bouton "large"
            const { rerender } = render(<Button>Click me!</Button>);
            const buttonElement = screen.getByRole('button', { name: /click me!/i });
            
            // On récupère le padding initial (par exemple s'il n'est pas défini, il prendra la valeur par défaut)
            // Pour notre test, on va plutôt vérifier la transition directe :
            
            // 2. Act : On lui passe la prop large
            rerender(<Button large={true}>Click me!</Button>);
            
            // 3. Assert : On vérifie que le padding spécifique à la taille "large" est appliqué
            expect(buttonElement).toHaveStyle('padding: 16px 32px');
    });
    it('affiche une icône lorsque la prop icon est fournie', () => {
        // 1. Arrange : On crée un élément qui simule une icône
        const MockIcon = <span data-testid="button-icon">🌟</span>;
        
        render(<Button icon={MockIcon}>Click me!</Button>);
        
        // 2. Act : On récupère le bouton et l'icône
        const buttonElement = screen.getByRole('button', { name: /click me!/i });
        const iconElement = screen.getByTestId('button-icon');
        
        // 3. Assert : On vérifie que l'icône est présente dans le document
        // et qu'elle est bien à l'intérieur du bouton
        expect(iconElement).toBeInTheDocument();
        expect(buttonElement).toContainElement(iconElement);
    });
});