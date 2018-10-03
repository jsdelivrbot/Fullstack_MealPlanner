"use strict";

import React from 'react';
import { Field } from 'redux-form';

export function myInput(field) {
    const { meta: { touched, error } } = field; 
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
            className='form-control'
            type={field.type}
            {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
};

export function myTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea
            className='form-control'
            {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
};

export function ingredientFields({ fields, meta: { error, submitFailed } }) {
  return (
      <ul>
          {fields.map((ingredient, index) => (
              <li key={index} className='form-inline'>
              <Field
                  name={`${ingredient}.name`}
                  type="text"
                  component={myInput}
                  label="Ingredient"
              />
              <Field
                  name={`${ingredient}.quantity`}
                  type="text"
                  component={myInput}
                  label="Quantity"
              />
              <button
                  type="button"
                  title="Remove Ingredient"
                  onClick={() => fields.remove(index)}
              />
              </li>
          ))}
          <button type="button" onClick={() => fields.push({})}>
              Add Ingredient
          </button>
          {submitFailed && error && <span>{error}</span>}
      </ul>
  )
}

export function tagsFields({ fields, meta: { error, submitFailed } }) {
  return (
      <ul>
          {fields.map((tag, index) => (
              <li key={index}>
              <Field
                  name={`${tag}.name`}
                  type="text"
                  component={myInput}
                  label="Tag name"
              />
              <button
                  type="button"
                  title="Remove Tag"
                  onClick={() => fields.remove(index)}
              />
              </li>
          ))}
          <button type="button" onClick={() => fields.push({})}>
              Add Tag
          </button>
          {submitFailed && error && <span>{error}</span>}
      </ul>
  )
}