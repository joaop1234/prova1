
app.get('/', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM Agendamentos');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('Erro ao buscar os agendamentos');
    }
});

app.post('/agendamento/novo', async (req, res) => {
    try {
        const { espaco, data, hora, motivo } = req.body;
        const request = new sql.Request();
        await request.query(`INSERT INTO Agendamentos (espaco, data, hora, motivo) VALUES ('${espaco}', '${data}', '${hora}', '${motivo}')`);
        res.status(201).send('Agendamento criado com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao criar o agendamento');
    }
});

app.delete('/agendamento/excluir/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const request = new sql.Request();
        await request.query(`DELETE FROM Agendamentos WHERE id = ${id}`);
        res.send('Agendamento excluído com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao excluir o agendamento');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});