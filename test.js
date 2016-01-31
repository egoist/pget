import test from 'ava'
import pget from './'

test('main', async t => {
	await pget('https://raw.githubusercontent.com/egoist/aimer/master/package.json', {
		target: 'temp.json'
	})
	try {
		require.resolve('./temp.json')
		t.pass()
	} catch (e) {
		t.fail(e.message)
	}
})
