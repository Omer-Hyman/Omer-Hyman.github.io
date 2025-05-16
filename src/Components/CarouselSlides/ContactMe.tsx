import { useEffect, type JSX } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function AboutMe(): JSX.Element {
  const [state, handleSubmit] = useForm('xnndladb');
  if (state.succeeded) {
    return (
      <p>
        Thanks for sending me a message. I will get back to you via email asap!
      </p>
    );
  }

  return (
    <div className='ml-1'>
      {/* TODO: Or copy my email address to clipboard */}
      <h3>Contact Me</h3>
      <form className='grid-cols-auto grid' onSubmit={handleSubmit}>
        <label htmlFor='name' className='mt-0'>
          Name
        </label>
        <input name='name' required></input>
        <ValidationError
          prefix='Name'
          field='name'
          errors={state.errors}
          className={'text-[#FF6F61]'}
        />

        <label htmlFor='email'>Email</label>
        <input name='email' type='email' required></input>
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <label htmlFor='subject'>Subject (Optional)</label>
        <input name='subject'></input>

        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          rows={3}
          required
          className='resize-none'
        ></textarea>
        <ValidationError
          prefix={'Message'}
          field='message'
          errors={state.errors}
        />

        <button
          className='bg-mutedCoral mt-3 mr-1 ml-auto h-fit w-fit rounded-md p-3 disabled:bg-amber-50'
          type='submit'
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
