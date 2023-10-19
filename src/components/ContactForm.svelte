<!-- ContactForm.svelte -->
<script>
    let name = '';
    let email = '';
    let message = '';

    async function handleSubmit() {
        const response = await fetch('/api/contact-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Error sending email. Please try again later.');
        }
    }
</script>


<div>
	<h2 class="text-4xl font-bold tracking-tight sm:text-3xl mb-4">Contact Us</h2>
    <form on:submit|preventDefault="{handleSubmit}">
		<div class="mb-6">
			<label for="name" class="block text-sm font-medium">
				<span class="label-text">Name</span>
			</label>
			<input
				type="text"
				name="name"
				bind:value="{name}"
				aria-label="name"
				placeholder="Enter your name"
				required
				autocomplete="off"
				class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
			/>
			</div>
			<div class="mb-6">
			<label for="email" class="block text-sm font-medium">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				bind:value="{email}"
				aria-label="email"
				placeholder="you@email.com"
				required
				autocomplete="off"
				class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"	    
			/>
			</div>
			<div class="mb-6">
			<label for="message" class="block text-sm font-medium">
				<span class="label-text">Message</span>
			</label>
			<textarea
				name="message"
				aria-label="message"
				bind:value="{message}"
				placeholder="Write your message here..."
				required
				rows="10"
				autocomplete="off"
				class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
			/>
			</div>
			<div class="mt-10 grid">
				<button type="submit" class="btn btn-primary cursor-pointer">
			<input
				type="submit"
				value="Submit"
			/>
			</button></div>
		</form>
</div>
