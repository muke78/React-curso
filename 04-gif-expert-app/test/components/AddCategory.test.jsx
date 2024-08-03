import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Demon Slayer' } });
        expect(input.value).toBe('Demon Slayer')
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Demon Slayer';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)



    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

       const onNewCategory = jest.fn();
       render(<AddCategory onNewCategory={onNewCategory} />);

       const form = screen.getByRole('form');
       fireEvent.submit(form);

       expect( onNewCategory ).toHaveBeenCalledTimes(0);
    //    expect( onNewCategory ).not.toHaveBeenCalled();
    });
}) 


/**
 * ToHaveBeenCalled es un metodo de jest que nos sirve para ver 
 * si una funcion se ha podidio llamar correctamente
 * 
 * ToHaveBeenCalledTimes nos sirve para ver si la funcion que 
 * estamos llamando se este llamando solo una vez
 * 
 */