#Check that you are using python 3.8 or further 
#pip install -U aflr
import aflr 
# Make sure to import your API key
aflr.api_key ="996463f1fb8a4683b0c0913835782d4c"

# Let's create a script and have the text as Hello World!
script = aflr.Script().create(scriptText="Hello world", scriptName="hello", moduleName="hello", projectName="hello")
print(script)

# create text to speech 
response = aflr.Speech().create(scriptId=script.get("scriptId"), voice="Joanna")
print(response)

# Now lets master the speech file with high quality and a nice background track
response = aflr.Mastering().create(
	scriptId=script.get("scriptId"),
	backgroundTrackId="full__citynights.wav"
	)
print(response)

# retrieve mastered file and download to your local folder
file = aflr.Mastering().download(scriptId=script.get("scriptId"), destination=".")
print(file)